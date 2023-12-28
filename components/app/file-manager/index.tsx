import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic"
import DeleteIcon from "@mui/icons-material/Delete"
import Download from "@mui/icons-material/Download"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import { Button } from "@mui/material"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { useTheme } from '@mui/material/styles'
import { useAppDispatch } from "@redux/store"
import { formatFileSize } from "@utils/size-file/size-file.util"
import { ChangeEvent, DragEvent, useCallback, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { FileItemI, FileManagerPropsI, ItemMenuPanelPropsI } from "./file-manager.interface"
import MenuPanel from "./menu-panel"
import { isImage } from "@utils/files/files.util"
import config from "@config"
import { openSnackbar } from "@redux/slices/ui/snackbar"

const FileManager = ({ items = [], show = false, upload = true, handleSetListFiles = () => { }, itemSelect = () => { } }: FileManagerPropsI) => {
    const theme = useTheme()
    const dispatch = useAppDispatch()
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isMosaic, setIsMosaic] = useState(false)
    const [inDrag, setInDrag] = useState(false)

    const { t: tFileManager } = useTranslation('file-manager')

    const handleDragStart = useCallback((e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }, [])

    const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
        if (!upload) return
        e.preventDefault()
        !inDrag && setInDrag(true)
    },
        [inDrag, upload]
    )

    const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
        if (!upload) return
        e.preventDefault()
        setInDrag(false)

        handleSetListFiles([
            ...items,
            ...Array.from(e.dataTransfer.files).map((file) => {
                return {
                    file,
                    customName: `${new Date().getTime()}----${file.name}`,
                }
            }),
        ])
    },
        [items, upload]
    )

    const onDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
        if (!upload) return
        e.preventDefault()
        setInDrag(false)
    },
        [upload]
    )

    const handleChangeStatusView = useCallback(() => {
        setIsMosaic(!isMosaic)
    }, [isMosaic])

    const handleClose = useCallback(() => {
        typeof handleSetListFiles == "function" && handleSetListFiles(items)
    }, [items])

    const handleRemove = useCallback((index: number, uuid: string, withPetition: boolean = false) => {
        if (!upload) return
        if (!withPetition) return handleSetListFiles(items.filter((_, i) => index !== i))

        fetch(`${config.server.url}/api/files/${uuid}`, {
            method: "DELETE",
            credentials: "include"
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error || !res.deleted) return dispatch(
                    openSnackbar({
                        open: true,
                        message: 'The file could not be deleted',
                        variant: 'alert',
                        alert: {
                            color: 'success'
                        },
                        close: false
                    })
                )

                handleSetListFiles(items.filter((_, i) => index !== i))

                dispatch(
                    openSnackbar({
                        open: true,
                        message: 'The file has been deleted',
                        variant: 'alert',
                        alert: {
                            color: 'success'
                        },
                        close: false
                    })
                )
            })
            .catch((error) => {
                console.error("Error downloading file:", error)
            })
    },
        [items, upload]
    )

    const handleOpenFile = useCallback(() => {
        if (!upload || !fileInputRef.current) return
        fileInputRef.current.click()
    }, [fileInputRef, upload])

    const handleChangeFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!upload) return
        const _files = e?.target?.files ? Array.from(e?.target?.files) : []

        handleSetListFiles([
            ...items,
            ...Array.from(_files).map((file) => {
                return {
                    file,
                    customName: `${new Date().getTime()}----${file.name}`,
                }
            }),
        ])
    },
        [items, upload]
    )

    const itemsMenu = useMemo(() => {
        const items: ItemMenuPanelPropsI[] = [
            {
                icon: { Component: RemoveRedEyeIcon },
                title: tFileManager('view'),
                key: "view",
            },
        ]

        if (upload) {
            items.push({
                icon: { Component: DeleteIcon },
                title: tFileManager('remove'),
                key: "remove",
            })
        }

        items.push({
            icon: { Component: Download },
            title: tFileManager('download'),
            key: "download",
        })

        return items
    }, [upload])

    const handleDownload = (file: FileItemI) => {
        fetch(file.downloadSrc as string, {
            method: "GET",
            credentials: "include"
        })
            .then((response) => {
                return response.blob()
            })
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]))
                const link = document.createElement("a")
                link.style.display = "none"
                link.href = url
                link.setAttribute("download", file.name as string)
                document.body.appendChild(link)
                link.click()
                link && link.parentNode && link.parentNode.removeChild(link)
            })
            .catch((error) => {
                console.error("Error downloading file:", error)
            })
    }

    return (
        <div
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#fff',
                zIndex: 10,
                padding: 24,
                display: show ? "flex" : "none",
                flexDirection: "column",
            }}
            draggable
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragLeave={onDragLeave}
            onDrop={handleDrop}
        >
            {upload ? (
                <form
                    method="post"
                    encType="multipart/form-data"
                    style={{ opacity: 0 }}
                >
                    <input
                        type="file"
                        name="files[]"
                        multiple
                        accept="*"
                        ref={fileInputRef}
                        onChange={handleChangeFile}
                    />
                </form>
            ) : (
                ""
            )}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div onClick={handleClose} style={{ cursor: "pointer" }}>
                    <ArrowBackIcon />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    {upload ? (
                        <div style={{ marginRight: 20 }}>
                            <Button
                                variant="contained"
                                component="label"
                                onClick={handleOpenFile}
                            >
                                Upload File
                            </Button>
                        </div>
                    ) : null}
                    <div onClick={handleChangeStatusView} style={{ cursor: "pointer" }}>
                        {isMosaic ? <FormatListBulletedIcon /> : <AutoAwesomeMosaicIcon />}
                    </div>
                </div>
            </div>

            {items.length ? (
                <div
                    style={{
                        flex: "1 1 auto",
                        overflow: "hidden",
                        overflowY: "auto",
                        display: "flex",
                    }}
                >
                    {!isMosaic ? (
                        <TableContainer component={Paper} style={{ height: "100%" }}>
                            <Table
                                sx={{ minWidth: 650 }}
                                style={{ height: !items.length ? "100%" : "auto" }}
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{tFileManager('name')}</TableCell>
                                        <TableCell>{tFileManager('file-size')}</TableCell>
                                        {upload ? (
                                            <TableCell>
                                                <MoreVertIcon />
                                            </TableCell>
                                        ) : (
                                            ""
                                        )}
                                    </TableRow>
                                </TableHead>
                                <TableBody style={{ height: "100%" }}>
                                    {items.map((data, i) => {
                                        const file = data.file || data
                                        const name = file.name as string
                                        const etx = name.split(".").pop()
                                        const _isImage = isImage(etx as string)

                                        const _itemsMenu = itemsMenu.filter(
                                            (item) =>
                                                (item.key == "view" && _isImage) || item.key != "view"
                                        )

                                        return (
                                            <TableRow
                                                sx={{
                                                    "&:last-child td, &:last-child th": { border: 0 },
                                                }}
                                                key={i}
                                                style={{ maxHeight: "50px", overflow: "auto" }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {file.name}
                                                </TableCell>
                                                <TableCell>{formatFileSize(file.size as number)}</TableCell>

                                                {_itemsMenu.length ? (
                                                    <TableCell>
                                                        <MenuPanel
                                                            buttonPoints
                                                            items={_itemsMenu}
                                                            handleClick={(key) => {
                                                                key == "remove" && handleRemove(i, data.uuid as string, data.file ? true : false)
                                                                key == "view" && itemSelect(file)
                                                                key == "download" && handleDownload(file)
                                                            }}
                                                        />
                                                    </TableCell>
                                                ) : null}
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <div
                            style={{
                                flex: "1 1 auto",
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                            }}
                        >
                            <div>
                                <h6>{tFileManager("all-elements")}</h6>
                            </div>
                            <div
                                style={{
                                    display: "grid",
                                    gap: "1rem",
                                    gridAutoRows: "13rem",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(7rem, 12rem))",
                                    flex: "1 1 auto",
                                    overflow: "hidden",
                                    overflowY: "auto",
                                }}
                            >
                                {items.map((data, i) => {
                                    const file = data.file || data
                                    const fileName = file.name as string
                                    const etx = fileName.split(".").pop() as string
                                    const _isImage = isImage(etx)
                                    const _itemsMenu = itemsMenu.filter(
                                        (item) =>
                                            (item.key == "view" && _isImage) || item.key != "view"
                                    )

                                    const preview = _isImage ? file.src ? file.src
                                        : URL.createObjectURL(file as any)
                                        : null

                                    return (
                                        <div
                                            className="card-file"
                                            style={{
                                                height: 200,
                                                overflow: "hidden",
                                                display: "flex",
                                                flexDirection: "column",
                                                cursor: _isImage ? "pointer" : "auto",
                                            }}
                                            key={i}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    paddingBottom: 3,
                                                }}
                                            >
                                                <div
                                                    className="truncate"
                                                    style={{ maxWidth: "9rem", overflow: "hidden" }}
                                                >
                                                    <span
                                                        style={{ fontWeight: "bold", fontSize: ".9em" }}
                                                    >
                                                        {fileName}
                                                    </span>
                                                </div>

                                                {_itemsMenu.length ? (
                                                    <div
                                                        style={{
                                                            flex: "1 1 auto",
                                                            display: "flex",
                                                            justifyContent: "flex-end",
                                                        }}
                                                    >
                                                        <MenuPanel
                                                            buttonPoints
                                                            items={_itemsMenu}
                                                            handleClick={(key) => {
                                                                key == "remove" && handleRemove(i, data?.uuid as string, data.file ? true : false)
                                                                key == "view" && itemSelect(file)
                                                                key == "download" && handleDownload(file)
                                                            }}
                                                        />
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div
                                                style={{
                                                    flex: "1 1 auto",
                                                    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#fff',
                                                    width: "100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    overflow: "hidden",
                                                }}
                                                onClick={() => {
                                                    _isImage && itemSelect(file)
                                                }}
                                            >
                                                {_isImage ? (
                                                    <div
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            overflow: "hidden",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <img
                                                            src={preview as string}
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover",
                                                            }}
                                                            alt=""
                                                        />
                                                    </div>
                                                ) : (
                                                    <InsertDriveFileIcon style={{ fontSize: "4em" }} />
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            ) : null}

            {!items.length && upload ? (
                <div
                    style={{
                        flex: "1 1 auto",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        cursor: "pointer",
                    }}
                    onClick={handleOpenFile}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                            zIndex: 100,
                        }}
                    ></div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "50px 0",
                            cursor: "pointer",
                        }}
                    >
                        <InsertDriveFileIcon
                            style={{ fontSize: "7em", marginBottom: 10, opacity: 0.4 }}
                        />

                        {inDrag ? (
                            <div style={{ textAlign: "center" }}>
                                <strong style={{ fontSize: "1.7em" }}>
                                    {tFileManager('drop-files')}
                                </strong>
                            </div>
                        ) : (
                            <div style={{ textAlign: "center" }}>
                                <strong style={{ fontSize: "1.7em" }}>
                                    {tFileManager('drop-files-here')}
                                </strong>
                                <p style={{ color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.4)' : "rgba(0,0,0,.4)" }}>
                                    {tFileManager("or-click-to-add-files")}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            ) : null}

            {!items.length && !upload ? (
                <div
                    style={{ padding: "50px 0", textAlign: "center", fontSize: "3em" }}
                >
                    <p>{tFileManager('there-are-no-files-to-show')}</p>
                </div>
            ) : null}
        </div>
    )
}

export default FileManager
