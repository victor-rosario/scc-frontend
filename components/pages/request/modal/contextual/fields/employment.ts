import { FieldConfig } from '@components/app/modal/FormModal/FormModal.interface'

export const employment: FieldConfig<any>[] = [
    {
        label: '¿Está trabajando actualmente?',
        name: 'random-5',
        type: 'switch',
        responsive: {
            xs: 12
        }
    },
    {
        label: '¿Por qué no está trabajando? (Solo para personas de 16 años o más)',
        name: 'random-6',
        type: 'select',
        options: [
            'Ha buscado trabajo y no encuentra',
            'Necesita capacitación para poder aplicar a los empleos disponibles (No tiene suficiente educación o experiencia)',
            'Falta de transporte adecuado para llegar al trabajo',
            'Necesita apoyo para identificar/localizar empleos',
            'No cree que le contraten',
            'Actitudes negativas hacia las personas con discapacidad',
            'Falta de dispositivos de apoyo o de tecnología que le permitan movilizarse (sillas de ruedas, muletas, andadores, bastones, etc.)',
            'Falta de ajustes razonables para realizar las funciones correspondientes',
            'Lugares de trabajo poco accesibles',
            'Horario de trabajo poco flexible',
            'Su familia no está de acuerdo con que trabaje',
            'Está estudiando',
            'Se dedica a los quehaceres domésticos',
            'No sabe/ no responde'
        ].map((x) => ({ label: x, value: x })),
        responsive: {
            xs: 12
        }
    },
    {
        label: '¿Cuál es su situación ocupacional desde la semana pasada?',
        name: 'random-7',
        type: 'select',
        options: ['Ocupado permanentemente', 'Trabaja Ocasionalmente', 'Trabaja temporalmente', 'No sabe'].map((x) => ({
            label: x,
            value: x
        })),
        responsive: {
            xs: 6
        }
    },
    {
        label: 'En su trabajo la mayor parte del tiempo se ha desempeñado como:',
        name: 'random-8',
        type: 'select',
        options: ['Patrón o empleador', 'Empleado formal', 'Trabajador formal por cuenta propia o independiente', 'Trabajador informal', 'No sabe/ no responde'].map(x => ({ label: x, value: x })),
        responsive: {
            xs: 6
        }
    },
    {
        label: '¿Su hogar recibe algún subsidio del Estado?',
        name: 'random-9',
        type: 'switch',
        responsive: {
            xs: 12
        }
    },
    {
        label: '¿Cuál de los siguientes subsidios recibe su hogar?',
        name: 'random-10',
        type: 'text',
        placeholder: 'Tarjeta Solidaridad o Pensión',
        responsive: {
            xs: 12
        }
    }
]
