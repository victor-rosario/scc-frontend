import { IDiseaseHistories } from '@providers/disease-histories/disease-histories.interface'
import diseaseHistoryProvider from '@providers/disease-histories/disease-histories.provider'
import { IHealthIssues } from '@providers/health-issues/health-issue.interface'
import healthIssueProvider from '@providers/health-issues/health-issue.provider'
import { ICODSI } from '@providers/icods/icod.interface'
import icodProvider from '@providers/icods/icod.provider'
import { useEffect, useState } from 'react'

function useGetBiomedicalData({ isOpen }: { isOpen: boolean }) {

    const [icods, setIcods] = useState<ICODSI[]>([])
    const [healthIssues, setHealthIssues] = useState<IHealthIssues[]>([])
    const [diseaseHistories, setDiseaseHistories] = useState<IDiseaseHistories[]>([])

    const getIcods = () => {
        icodProvider.getAll().then(icods => setIcods(icods))
    }

    const getHealthIssues = () => {
        healthIssueProvider.getAll().then(healthIssues => setHealthIssues(healthIssues))
    }

    const getDiseaseHistories = () => {
        diseaseHistoryProvider.getAll().then(diseaseHistories => setDiseaseHistories(diseaseHistories))
    }

    useEffect(() => {
        if (!isOpen) return

        getIcods()
        getHealthIssues()
        getDiseaseHistories()

    }, [isOpen])

    return {
        icods,
        healthIssues,
        diseaseHistories
    }
}

export default useGetBiomedicalData