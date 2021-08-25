export default function Header({text}) {
    return(
        <div className="bg-theme-main h-20" data-replace='{ "translate-y-12": "translate-y-0" }'>
            <h2 className="pt-4 ml-5 font-bold text-4xl underline text-theme-accent">{text}</h2>
        </div>
    )
}