import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'

const GREETING =
  'Hi! Main Nexa Tech ka assistant hoon. Services, projects ya project process ke baare me kuch bhi poochiye.'

const SUGGESTIONS = [
  'What services do you offer?',
  'Web development me kya milta hai?',
  'Project kaise start karein?',
]

const LINK_RE = /(\/(?:contact|services|work)(?:\/[\w-]+)?(?:\?service=[\w-]+)?)/g

function MessageText({ text, onNavigate }) {
  // split() with a capture group puts the matched paths at odd indexes
  return text.split(LINK_RE).map((part, i) =>
    i % 2 === 1 ? (
      <Link
        key={i}
        to={part}
        onClick={onNavigate}
        className="font-semibold underline underline-offset-2"
      >
        {part}
      </Link>
    ) : (
      part
    )
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef(null)
  const logRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  const close = () => {
    setOpen(false)
    toggleRef.current?.focus()
  }

  const send = async (text) => {
    const content = text.trim()
    if (!content || loading) return

    const next = [...messages, { role: 'user', content }]
    setMessages(next)
    setInput('')
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Request failed')
      setMessages([...next, { role: 'assistant', content: data.reply }])
    } catch {
      setError('Reply nahi aa paaya. Please try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    send(input)
  }

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.section
            role="dialog"
            aria-label="Chat with Nexa Tech assistant"
            onKeyDown={(e) => e.key === 'Escape' && close()}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex h-[30rem] max-h-[calc(100dvh-6.5rem)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl sm:w-96"
          >
            <header className="flex items-center justify-between bg-forest px-5 py-4 text-white">
              <div>
                <h2 className="text-sm font-semibold">Nexa Tech Assistant</h2>
                <p className="text-xs text-white/60">Services, projects and process</p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close chat"
                className="rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </header>

            <div
              ref={logRef}
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              <div className="max-w-[85%] whitespace-pre-wrap rounded-xl border border-border bg-bg px-4 py-3 text-sm leading-relaxed text-text">
                {GREETING}
              </div>

              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="rounded-lg border border-border bg-bg px-3 py-2 text-left text-xs text-muted transition-colors hover:border-forest/30 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-forest"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m, i) =>
                m.role === 'user' ? (
                  <div
                    key={i}
                    className="ml-auto max-w-[85%] whitespace-pre-wrap rounded-xl bg-brand px-4 py-3 text-sm leading-relaxed text-white"
                  >
                    {m.content}
                  </div>
                ) : (
                  <div
                    key={i}
                    className="max-w-[85%] whitespace-pre-wrap rounded-xl border border-border bg-bg px-4 py-3 text-sm leading-relaxed text-text"
                  >
                    <MessageText text={m.content} onNavigate={close} />
                  </div>
                )
              )}

              {loading && (
                <div className="max-w-[85%] rounded-xl border border-border bg-bg px-4 py-3 text-sm text-muted">
                  Typing...
                </div>
              )}

              {error && (
                <p role="alert" className="text-xs text-red-600">
                  {error}
                </p>
              )}
            </div>

            <form onSubmit={onSubmit} className="flex gap-2 border-t border-border p-3">
              <label htmlFor="chat-input" className="sr-only">
                Your message
              </label>
              <input
                id="chat-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={500}
                placeholder="Type your question..."
                autoComplete="off"
                className="min-w-0 flex-1 rounded-lg border border-border bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-forest"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white transition-all hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              >
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        ref={toggleRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-emerald-300 shadow-xl transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
      >
        {open ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
      </button>
    </div>
  )
}