import { FormEvent, useState } from 'react';
import axios from 'axios';

export default function ProjectsSection() {
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        axios.post('http://localhost:3201/api/sendEmail', {
            email,
            title,
            message,
        })
            .then((response) => {
                console.log('Mensagem enviada com sucesso:', response.data);
            })
            .catch((error) => {
                console.error('Erro ao enviar mensagem:', error);
            });
    };

    return (
        <div className='flex flex-col w-full h-auto bg-stone-900 py-16 mt-24' id='contact'>
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
                <h2 className='text-2xl sm:text-3xl text-white font-bold mb-6'>Contact Me</h2>
                <div className="flex flex-col gap-6">
                    <input
                        type="email"
                        className="p-3 rounded-sm bg-stone-200 text-black"
                        placeholder="Your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        className="p-3 rounded-sm bg-stone-200"
                        placeholder="Message Title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        name="message"
                        cols={30}
                        rows={6}
                        className="p-3 rounded-sm bg-stone-200"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit" className='p-3 px-6 bg-red-700 text-white font-bold rounded-sm transition-all hover:bg-red-800'>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}
