import Image from "next/image";

export const IconStatus = (size = 40) => {
    return {
        check: <Image priority height={size} width={size} src='/assets/images/modal/check.svg' alt='check' />,
        danger: <Image priority height={size} width={size} src='/assets/images/modal/danger.svg' alt='danger' />,
        warning: <Image priority height={size} width={size} src='/assets/images/modal/warn.svg' alt='warning' />,
    }
}