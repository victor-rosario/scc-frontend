import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import { VisorImagePropsI } from "./visor-image.interface"

const VisorImage = ({ handleClose, show, src }: VisorImagePropsI) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"lg"}
      open={show}
      onClose={handleClose}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <DialogContent
        style={{ overflow: "hidden", flex: "1 1 auto", display: "flex" }}
      >
        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={src}
            alt="image"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default VisorImage
