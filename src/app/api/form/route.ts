import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        const response = await fetch('http://localhost:8088/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: 123}),
        });

        // 서버에서 받은 응답을 JSON으로 변환
        const data = await response.text();
        console.log('Response from BE:', data);

        // 클라이언트로 응답 반환
        return NextResponse.json({status: data});
    } catch (error) {
        console.error('Error sending request to BE:', error);
        return NextResponse.json({status: 'Error', message: 'Failed to send request'}, {status: 500});
    }
}
