export default function FormButton({requestValue}: { requestValue: string }) {

    const printResponseData = () => {
        const asyncHelper = async () => {
            await fetch('/api/form',{
                method: 'POST',
            })
        }
        asyncHelper()
    }

    return (
        <>
            <button onClick={printResponseData}>
                click!
            </button>
        </>
    )
}
