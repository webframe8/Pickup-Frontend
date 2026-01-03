import { useEffect, useState, useMemo } from "react";
//import { Helmet } from "@vuer-ai/react-helmet-async";

const UseMeta = (title, description, canonical, sitename)=>{
    return useMemo(() =>{
        return {
            title,
            canonical,
            meta: [
                {name: "description", content: description},

                // Open Graph
                { property: "og:title", content: title },
                { property: "og:type", content: "Webapplication" },
                { property: "og:site_name", content: sitename },
                { property: "og:description", content: description },
                { property: "og:url", content: canonical },
                { property: "og:image", content: "/default-image.jpg" },
                { property: "og:locale", content: "en_US" },

                // Twitter
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: title },
                { name: "twitter:description", content: description },
                { name: "twitter:image", content: "/default-image.jpg" },
                { name: "twitter:site", content: `@${sitename}` },
                { name: "twitter:creator", content: "Me" },
            ],
        };
    }, [title, description, canonical])
}

export default UseMeta