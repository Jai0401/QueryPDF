import PropTypes from 'prop-types';

export function Button({ children }) {
    return (
        <button className='rounded-lg border-grey border-2 p-2 items-center flex'>
            <svg className='' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.875C13.3492 16.875 16.875 13.3492 16.875 9C16.875 4.65076 13.3492 1.125 9 1.125C4.65076 1.125 1.125 4.65076 1.125 9C1.125 13.3492 4.65076 16.875 9 16.875Z" stroke="black" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.625 9H12.375" stroke="black" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 5.625V12.375" stroke="black" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className='px-4'>
            {children}
            </div>
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
};