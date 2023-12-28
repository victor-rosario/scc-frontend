import { FieldConfig } from '@components/app/modal/FormModal/FormModal.interface'

export const educations: FieldConfig<any>[] = [
    {
        label: '¿Asiste o asistió a una escuela, colegio o universidad?',
        name: 'random-1',
        type: 'select',
        options: [
            {
                label: 'Sí asiste',
                value: 'Sí asiste'
            },
            {
                label: 'No asiste, pero asistió',
                value: 'No asiste, pero asistió'
            },
            {
                label: 'Nunca asistió',
                value: 'Nunca asistió'
            }
        ],
        responsive: {
            xs: 6
        }
    },
    {
        label: 'Nivel educativo más alto aprobado',
        name: 'random-2',
        type: 'select',
        options: [
            {
                label: 'Ninguno',
                value: 'Ninguno'
            },
            {
                label: 'Educación inicial',
                value: 'Educación inicial'
            },
            {
                label: 'Educación básica',
                value: 'Educación básica'
            },
            {
                label: 'Educación media',
                value: 'Educación media'
            },
            {
                label: 'Formación técnica',
                value: 'Formación técnica'
            },
            {
                label: 'Universitario',
                value: 'Universitario'
            },
            {
                label: 'Especialidad / maestría',
                value: 'Especialidad / maestría'
            },
            {
                label: 'Doctorado',
                value: 'Doctorado'
            },
            {
                label: 'No sabe',
                value: 'No sabe'
            }
        ],
        responsive: {
            xs: 6
        }
    },
    {
        label: 'Si nunca estudió y/o no está estudiando, favor indicar: ¿Cuál es la causa principal por la cual no está estudiando o no estudió?',
        name: 'random-3',
        type: 'select',
        options: [
            {
                label: 'No está en edad escolar',
                value: 'No está en edad escolar'
            },
            {
                label: 'No existe centro educativo cercano',
                value: 'No existe centro educativo cercano'
            },
            {
                label: 'La institución educativa le ha negado el cupo',
                value: 'La institución educativa le ha negado el cupo'
            },
            {
                label: 'La institución no garantizó los servicios de apoyo requeridos',
                value: 'La institución no garantizó los servicios de apoyo requeridos'
            },
            {
                label: 'Falta de recursos económicos',
                value: 'Falta de recursos económicos'
            },
            {
                label: 'Falta de cupos',
                value: 'Falta de cupos'
            },
            {
                label: 'Su familia no se lo permitió',
                value: 'Su familia no se lo permitió'
            },
            {
                label: 'No hay transporte',
                value: 'No hay transporte'
            },
            {
                label: 'No quiso, no le gustó o no le interesó',
                value: 'No quiso, no le gustó o no le interesó'
            },
            {
                label: 'Ya terminó sus estudios',
                value: 'Ya terminó sus estudios'
            },
            {
                label: 'Abandonó los estudios',
                value: 'Abandonó los estudios'
            },
            {
                label: 'No tiene tiempo',
                value: 'No tiene tiempo'
            },
            {
                label: 'Por trabajar o ayudar en la casa',
                value: 'Por trabajar o ayudar en la casa'
            },
            {
                label: 'Por falta de documentación',
                value: 'Por falta de documentación'
            },
            {
                label: 'Por discapacidad o enfermedad',
                value: 'Por discapacidad o enfermedad'
            },
            {
                label: 'Reprobó el año anterior',
                value: 'Reprobó el año anterior'
            },
            {
                label: 'Porque está o estuvo embarazada',
                value: 'Porque está o estuvo embarazada'
            },
            {
                label: 'Porque lo expulsaron por conducta',
                value: 'Porque lo expulsaron por conducta'
            },
            {
                label: 'Por movilización (interna/extranjero)',
                value: 'Por movilización (interna/extranjero)'
            },
            {
                label: 'No sabe/ no responde',
                value: 'No sabe/ no responde'
            }
        ],
        responsive: {
            xs: 12
        }
    },
    {
        label: '¿Sabe leer y escribir? (Solo para personas de 5 años o más):',
        name: 'random-4',
        type: 'switch',
        responsive: {
            xs: 12
        }
    },
]
