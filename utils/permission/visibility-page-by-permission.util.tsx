import { ReactNode } from "react";

interface IVisibilityPageByPermission {
    slug: string
    children: ReactNode
}

function VisibilityPageByPermission({ children }: IVisibilityPageByPermission) {

    return <>{children}</>
}

export default VisibilityPageByPermission