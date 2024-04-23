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
        <div className='flex flex-col w-full h-[70vh] bg-stone-900 mt-24'>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col p-12 gap-10 justify-center align-middle">
                    <input
                        type="text"
                        className="p-3 rounded-sm bg-stone-200 text-black"
                        placeholder="Seu email.."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        className="p-3 rounded-sm bg-stone-200"
                        placeholder="Título da Mensagem..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        name="message"
                        cols={30}
                        rows={10}
                        className="p-3 rounded-sm bg-stone-200"
                        placeholder="Digite sua Mensagem..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit" className='flex align-middle justify-center p-3 px-10 bg-red-700 rounded-sm transition-all'>
                        <span className='font-bold text-white'>
                            Enviar Mensagem
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}
