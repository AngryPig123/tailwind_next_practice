'use client'; // 이 컴포넌트가 클라이언트 컴포넌트임을 지정

import FormButton from "@/components/form/button";

export default function FormPage() {


    return (
        <>
            <FormButton requestValue='test'/>
        </>
    );

}