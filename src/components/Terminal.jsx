export default function Terminal() {
    const [input, setInput] = useState('')
    
    const commands = {
      help: () => "Available: bio, skills, contact",
      bio: () => "AI Engineer with 3+ years experience...",
      skills: () => "Python | TensorFlow | Computer Vision"
    }
  
    return (
      <div className="terminal">
        <div className="prompt">$ <input value={input} onChange={e => setInput(e.target.value)} /></div>
        {commands[input] && <div className="output">{commands[input]()}</div>}
      </div>
    )
  }