export default function NavButton({ href, text }) {
    return (
        <a href={href}>
            <div className="rounded transition duration-300 block py-4 px-4 hover:bg-theme-main hover:text-theme-purple">
                {text}
            </div>
        </a>
    )
}