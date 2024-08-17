import EmailSubscribeContainer from "@/components/email/EmailSubscribeContainer";
import EmailSubscribeImage from "@/components/email/EmailSubscribeImage";
import EmailSubscribeContent from "@/components/email/EmailSubscribeContent";

export default function EmailProject() {

    const contentType: EmailSubscribeContentType = {
        header: "Get diet and fitness tips in your inbox",
        content: "Eat better and exercise better. Sign up for the Diet&Fitness\nnewsletter.",
        buttonName: "Subscribe"
    }

    return (
        <>
            <EmailSubscribeContainer>
                <EmailSubscribeImage/>
                <EmailSubscribeContent emailSubscribeContentType={contentType}/>
            </EmailSubscribeContainer>
        </>
    )

}