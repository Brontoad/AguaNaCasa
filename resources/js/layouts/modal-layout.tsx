interface ModalLayoutProps {
    children: any,
    submit?: any,
    handleClose: any
}

export default function ModalLayout({
    children,
    submit = undefined,
    handleClose
}: ModalLayoutProps) {
    return (
        <div>
            {children}
            <div onClick={submit}></div>
            <div onClick={handleClose}></div>
        </div>
    );
}