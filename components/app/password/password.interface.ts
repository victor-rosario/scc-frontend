export interface HandleChangePasswordPropsI{
    (password: string, passwordPassed: boolean): void
}

export interface PasswordPropsI{
    title: string
    handleChange: HandleChangePasswordPropsI
}