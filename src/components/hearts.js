import React from 'react';
import { motion } from 'framer-motion';

function Hearts({ hearts }) {
    return (
        <div className="flex justify-center ">
            <div className=" flex w-[800px] place-items-center justify-between mr-4  ml-4 mt-4 ">
                <div className="">
                    <motion.div
                        animate={{
                            scale: hearts < 1 ? [1, 20, 20, 1, 1] : 1,
                            rotate: hearts < 1 ? [0, 0, 270, 270, 0] : 0,
                            /*translateX: hearts < 1 ? '350px' : '0px',
                        translateY: hearts < 1 ? '300px' : '0px',*/
                        }}
                        className="flex w-[100px] "
                    >
                        <svg
                            data-testid="fullHeart"
                            viewBox="0 0 37 36"
                            fill={
                                hearts > 0
                                    ? 'rgb(231, 105, 107)'
                                    : 'rgb(211,211,211)'
                            }
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-10a379p-0 knrAHI pl-1"
                            transform-origin="18.486799240112305px 18.014984041452408px"
                            opacity="1"
                        >
                            <path d="M36.9647 10.1928C36.9307 9.88191 36.9647 9.57097 36.8967 9.29458C36.3866 6.73795 35.2643 4.52682 33.2919 2.79937C31.9996 1.65926 30.6053 0.726437 28.905 0.311849C26.8985 -0.206385 24.9601 -0.102738 23.1237 1.00283C21.0493 2.24659 19.621 4.14678 18.6688 6.42701C18.6007 6.59976 18.5667 6.7725 18.5667 6.9107C18.0566 5.52874 17.3425 4.21588 16.3562 3.07576C14.7919 1.24467 12.9215 0.0354578 10.0649 0.0354578C9.62279 0.000908846 8.84062 0.173654 8.05846 0.380947C5.54191 1.10648 3.6375 2.73028 2.10717 4.76866C0.168749 7.39438 -0.341362 10.4347 0.168749 13.5786C0.508822 15.8934 1.63107 18.0355 3.22941 19.7629C4.75974 21.4213 6.35809 23.0105 7.88842 24.7034C9.01066 25.9472 10.2009 27.1564 11.2892 28.4001C12.0373 29.2639 12.8535 30.0585 13.6017 30.9222C14.5879 32.0278 16.6963 34.4117 17.7846 35.69C18.1586 36.1046 18.8048 36.1391 19.1789 35.7245C20.4031 34.3771 22.8857 31.6477 23.9739 30.4385C26.0824 28.1583 28.2248 25.8435 30.3333 23.5633C31.5575 22.2504 32.7818 20.9721 33.9721 19.6938C34.2441 19.3829 34.5162 19.0719 34.7542 18.7264C35.9785 16.9299 36.8287 15.0297 36.9647 12.8186C36.9987 12.6113 36.9987 10.331 36.9647 10.1928Z"></path>
                        </svg>
                        <svg
                            data-testid="fullHeart"
                            viewBox="0 0 37 36"
                            fill={
                                hearts > 1
                                    ? 'rgb(231, 105, 107)'
                                    : 'rgb(211,211,211)'
                            }
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-10a379p-0 knrAHI pl-1 "
                            transform-origin="18.486799240112305px 18.014984041452408px"
                            opacity="1"
                        >
                            <path d="M36.9647 10.1928C36.9307 9.88191 36.9647 9.57097 36.8967 9.29458C36.3866 6.73795 35.2643 4.52682 33.2919 2.79937C31.9996 1.65926 30.6053 0.726437 28.905 0.311849C26.8985 -0.206385 24.9601 -0.102738 23.1237 1.00283C21.0493 2.24659 19.621 4.14678 18.6688 6.42701C18.6007 6.59976 18.5667 6.7725 18.5667 6.9107C18.0566 5.52874 17.3425 4.21588 16.3562 3.07576C14.7919 1.24467 12.9215 0.0354578 10.0649 0.0354578C9.62279 0.000908846 8.84062 0.173654 8.05846 0.380947C5.54191 1.10648 3.6375 2.73028 2.10717 4.76866C0.168749 7.39438 -0.341362 10.4347 0.168749 13.5786C0.508822 15.8934 1.63107 18.0355 3.22941 19.7629C4.75974 21.4213 6.35809 23.0105 7.88842 24.7034C9.01066 25.9472 10.2009 27.1564 11.2892 28.4001C12.0373 29.2639 12.8535 30.0585 13.6017 30.9222C14.5879 32.0278 16.6963 34.4117 17.7846 35.69C18.1586 36.1046 18.8048 36.1391 19.1789 35.7245C20.4031 34.3771 22.8857 31.6477 23.9739 30.4385C26.0824 28.1583 28.2248 25.8435 30.3333 23.5633C31.5575 22.2504 32.7818 20.9721 33.9721 19.6938C34.2441 19.3829 34.5162 19.0719 34.7542 18.7264C35.9785 16.9299 36.8287 15.0297 36.9647 12.8186C36.9987 12.6113 36.9987 10.331 36.9647 10.1928Z"></path>
                        </svg>
                        <motion.svg
                            animate={{
                                rotate: [0, 270, 270, 0],
                            }}
                            data-testid="fullHeart"
                            viewBox="0 0 37 36"
                            fill={
                                hearts > 2
                                    ? 'rgb(231, 105, 107)'
                                    : 'rgb(211,211,211)'
                            }
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-10a379p-0 knrAHI pl-1 "
                            transform-origin="18.486799240112305px 18.014984041452408px"
                            opacity="1"
                        >
                            <path d="M36.9647 10.1928C36.9307 9.88191 36.9647 9.57097 36.8967 9.29458C36.3866 6.73795 35.2643 4.52682 33.2919 2.79937C31.9996 1.65926 30.6053 0.726437 28.905 0.311849C26.8985 -0.206385 24.9601 -0.102738 23.1237 1.00283C21.0493 2.24659 19.621 4.14678 18.6688 6.42701C18.6007 6.59976 18.5667 6.7725 18.5667 6.9107C18.0566 5.52874 17.3425 4.21588 16.3562 3.07576C14.7919 1.24467 12.9215 0.0354578 10.0649 0.0354578C9.62279 0.000908846 8.84062 0.173654 8.05846 0.380947C5.54191 1.10648 3.6375 2.73028 2.10717 4.76866C0.168749 7.39438 -0.341362 10.4347 0.168749 13.5786C0.508822 15.8934 1.63107 18.0355 3.22941 19.7629C4.75974 21.4213 6.35809 23.0105 7.88842 24.7034C9.01066 25.9472 10.2009 27.1564 11.2892 28.4001C12.0373 29.2639 12.8535 30.0585 13.6017 30.9222C14.5879 32.0278 16.6963 34.4117 17.7846 35.69C18.1586 36.1046 18.8048 36.1391 19.1789 35.7245C20.4031 34.3771 22.8857 31.6477 23.9739 30.4385C26.0824 28.1583 28.2248 25.8435 30.3333 23.5633C31.5575 22.2504 32.7818 20.9721 33.9721 19.6938C34.2441 19.3829 34.5162 19.0719 34.7542 18.7264C35.9785 16.9299 36.8287 15.0297 36.9647 12.8186C36.9987 12.6113 36.9987 10.331 36.9647 10.1928Z"></path>
                        </motion.svg>
                    </motion.div>
                </div>
                <div className="flex mb-4 ">
                    <span className="text-sm mr-1 ">{hearts}</span>
                </div>
            </div>
        </div>
    );
}

export default Hearts;