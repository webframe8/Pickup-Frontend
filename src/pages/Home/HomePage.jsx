import MetaHead from "../../components/heads/MetaHead"
import UseMeta from "../../hooks/UseMetaTags"
import { useState } from "react"
import ProgressLoader from "../../components/Loader/ProgressLoader"

export default function HomePage() {

    const [pageurl, setPageurl] = useState(window.location.href)
    const Metadata = UseMeta(
        "HomePage - Pickup",
        "Expplore post and find your date march to make your time more intresting and fun..",
        pageurl,
        "Pickup-dating-site"
    )
    console.log(pageurl)
    return (
        <>
        <MetaHead metadata={Metadata} />
        </>
    )
}