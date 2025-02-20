'use client'

import Button from "@src/components/Button/Button"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Link from "next/link"


const Root = () => {
    return (
        <VStack>
            로그인화면입니다.
            <Link href={"/home"}><Button label="로그인" size="lg" variant="primary" /></Link>
        </VStack>
    )
}

export default Root
