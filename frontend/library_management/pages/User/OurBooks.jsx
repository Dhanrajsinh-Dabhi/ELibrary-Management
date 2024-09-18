import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function OurBooks() {
        const [Books, setBooks] = useState([]);

        useEffect(() => {
                const token = localStorage.getItem('jwt_token');
                if (token) {
                        axios.get('http://localhost:3000/user/get-all-books', {
                                headers: { Authorization: `Bearer ${token}` },
                        })
                                .then((response) => {
                                        if (response.data.ok) {
                                                console.log(response.data)
                                                setBooks(response.data.posts);
                                                setLoading(false);
                                                // console.log(response.data.posts)

                                        }
                                })
                                .catch((error) => {
                                        console.error("gadbad hai kuch:", error);
                                });
                }

        }, [])
        return (
                <>
                        {/* <h1>our books</h1> */}

                        <main>

                                <>

                                        {Books.map((Book) => (
                                                <div key={Book._id}>
                                                        <img
                                                                src={Book.image.url}
                                                                alt='book from backend'
                                                                loading="fast"
                                                        />
                                                </div>
                                        ))}
                                </>
                        </main>
                </>
        );
}

export default OurBooks;