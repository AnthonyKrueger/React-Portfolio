export default function SkillIcon({icon, text, link}) {
    return (
    <div className="text-5xl flex flex-col items-center text-theme-accent-light hover:text-theme-purple py-2 px-5">
        <a href={link}>{icon}</a>
        <p className="text-sm pt-1 text-theme-orange">{text}</p>
    </div>
    )
}