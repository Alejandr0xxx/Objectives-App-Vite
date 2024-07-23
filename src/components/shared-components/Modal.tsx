interface Modal {
    children: React.ReactNode;
}
export default function Modal({children}: Modal) {
    return (
        <>
                <div className="flex items-center fixed inset-0 bg-gray-500 bg-opacity-75" >
                    <div className="mx-auto">
                        {children}
                    </div>
                </div>
        </>
    )
};
