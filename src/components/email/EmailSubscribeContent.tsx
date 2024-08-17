export default function EmailSubscribeContent(
    {emailSubscribeContentType}: { emailSubscribeContentType: EmailSubscribeContentType }
) {

    return (
        <>
            <div className="p-6 md:p-12">
                <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
                    {emailSubscribeContentType.header}
                </h2>
                <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                    {emailSubscribeContentType.content}
                </p>
                <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                    <input
                        className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                        type="text"
                        placeholder="Enter your email address"
                    />
                    <button
                        className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                        {emailSubscribeContentType.buttonName}
                    </button>
                </div>
            </div>
        </>
    )

}
