import Link from "next/link";

export default function MainPage() {

    return (
        <>
            <div className="flex flex-col items-left justify-center w-full max-w-7xl">

                <Link
                    className="p-6 m-6 bg-sky-300 rounded-2xl text-center"
                    href={"/email"}
                >
                    Email subscribe
                </Link>

            </div>
        </>
    )

}
