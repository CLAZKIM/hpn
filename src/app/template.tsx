export default function Template({children}: {children : React.ReactNode}) {
    return(
        <div id="doc-template">
            <main className="doc-main">
                {children}
            </main>
        </div>
    )
}

// "use client"

// import { SSRProvider } from "react-bootstrap"
// import BasicNavbar from "@/components/Navbar/BasicNavbar"

// export default function Template({children}: {children : React.ReactNode}) {
//     return(
//         <SSRProvider>
//             <BasicNavbar title={"어사이"} />
//             <div className="template">{children}</div>
//         </SSRProvider>
//     )
// }

///이전