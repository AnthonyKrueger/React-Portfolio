export default function SkillIcon({icon, text, link}) {
    return (
    <a href={link} target="_blank" rel="noreferrer" className="text-5xl flex flex-col items-center text-theme-accent-light transition duration-200 hover:text-theme-purple py-2 px-5">
        {icon}
        <p className="text-sm pt-1 text-theme-orange">{text}</p>
    </a>
    )
}