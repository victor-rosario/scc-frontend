import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const deseasesBiomedial: FieldConfig<any>[] = [
    {
        label: "Seleccionar código CIE-10",
        name: "code",
        type: "select",
        responsive: {
            xs: 6
        },
        options: [
            "A00-A09: Enfermedades intestinales infecciosas",
            "B00-B09: Infecciones virales específicas del sistema nervioso central",
            "C00-C14: Tumores malignos de los labios, cavidad oral y faringe",
            "D10-D36: Tumores benignos de los órganos digestivos",
            "D50-D53: Anemias nutricionales",
            "D70-D77: Trastornos de la coagulación intravascular",
            "E10-E14: Diabetes mellitus",
            "E40-E46: Desnutrición",
            "F20-F29: Esquizofrenia, trastornos esquizotípicos y trastornos delirantes",
            "F40-F48: Trastornos neuróticos, trastornos relacionados con el estrés y trastornos somatomorfos",
            "G00-G09: Infecciones del sistema nervioso central",
            "G20-G26: Enfermedades extrapiramidales y trastornos del movimiento",
            "H10-H13: Trastornos de la conjuntiva",
            "H30-H36: Trastornos corneales y del esclerótica",
            "H60-H62: Otitis externa",
            "H90-H94: Otros trastornos del oído",
            "I10-I16: Hipertensión esencial",
            "I20-I25: Enfermedades isquémicas del corazón",
            "J00-J06: Infecciones agudas de las vías respiratorias superiores",
            "J40-J47: Enfermedades crónicas de las vías respiratorias inferiores",
        ].map((label) => ({ label, value: label }))
    },
    {
        label: "Orígenes de condiciones médicas",
        name: "origins",
        type: "multi-select",
        responsive: {
            xs: 6
        },
        options: [
            "Congénito",
            "Enfermedad común",
            "Accidente de tránsito",
            "Accidente laboral"
        ].map((label) => ({ label, value: label }))
    },
    {
        label: "Descripción del diagnóstico",
        placeholder: "Descripción del diagnóstico",
        name: "descriptionDiagnose",
        type: "textarea",
        responsive: {
            xs: 6
        },
    },
    {
        label: "Antecedentes familiares relevantes a la condición presente",
        placeholder: "Antecedentes familiares relevantes a la condición presente",
        name: "relevantFamilyHistory",
        type: "textarea",
        responsive: {
            xs: 6
        },
    }
]