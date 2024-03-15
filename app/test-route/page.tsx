'use client'
import BannerSection from "@/components/banner"
import BottomAnimation from "@/components/bottomAnimation"
import HomeExplorersAnimation from "@/components/middleAnimation"
import ModrenDays from "@/components/modernDays"
import JoinUs from "@/components/movingLine"
import Link from "next/link"


const Page = () => {
    return(
        <>
            <h1>Heloo page ...</h1>
            <Link href={'/'}>Home</Link>
            <BannerSection />
               <ModrenDays />
               <JoinUs />
            <HomeExplorersAnimation />
               <BottomAnimation />
        </>
    )

}

export default Page