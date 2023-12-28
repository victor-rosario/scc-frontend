import { ICommunication } from "@providers/communication/communication.interface"
import communicationProvider from "@providers/communication/communication.provider"
import { IMotive } from "@providers/motive/motive.interface"
import motiveProvider from "@providers/motive/motive.provider"
import { IRole } from "@providers/role/role.interface"
import roleProvider from "@providers/role/role.provider"
import { ITerritorial } from "@providers/territorial/territorial.interface"
import territorialProvider from "@providers/territorial/territorial.provider"
import { useEffect, useState } from "react"

function useGetCaseModalData({ isOpen }: { isOpen: boolean }) {

    const [provinceUUID, setProvinceUUID] = useState<string>("")

    const [roles, setRoles] = useState<IRole[]>([])
    const [motives, setMotives] = useState<IMotive[]>([])
    const [communications, setCommunications] = useState<ICommunication[]>([])
    const [provinces, setProvinces] = useState<ITerritorial[]>([])
    const [municipalities, setMunicipalities] = useState<ITerritorial[]>([])

    const getRoles = () => {
        roleProvider.getAll().then(roles => setRoles(roles))
    }

    const getMotives = () => {
        motiveProvider.getAll().then(motives => setMotives(motives))
    }

    const getCommunications = () => {
        communicationProvider.getAll().then(communications => setCommunications(communications))
    }

    const getProvinces = () => {
        territorialProvider.getProvinces().then(provinces => {
            setProvinces(provinces)
        })
    }

    const getMunicipalities = () => {
        territorialProvider.getMunicipalities({ provinceUUID }).then(municipalities => {
            setMunicipalities(municipalities)
        })
    }

    useEffect(() => {
        if (!isOpen) return
        getRoles()
        getMotives()
        getCommunications()
        getProvinces()
    }, [isOpen])

    useEffect(() => {
        if (!provinceUUID) return
        getMunicipalities()
    }, [provinceUUID])

    return {
        roles,
        motives,
        communications,
        provinces,
        municipalities,
        setProvinceUUID,
    }
}

export default useGetCaseModalData