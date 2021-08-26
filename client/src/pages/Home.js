import TypicalWelcome from "../components/Typical"

export default function Home() {
    return (
        <div className="my-5 py-40 h-screen text-center container mx-auto">
          <TypicalWelcome />
          <a className="relative right-0" href="#aboutme">
           <i className="fas fa-chevron-down mt-20 text-2xl text-theme-accent-light animate-bounce float-right relative"></i>
          </a>
      </div>
    )
}
