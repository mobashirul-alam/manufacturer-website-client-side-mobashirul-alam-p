import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-2 lg:mx-20'>
            <h1 className='text-4xl text-center my-4'>Conceptual Question With Short Answer</h1>
            <article className='mb-4'>
                <p className='text-xl'>Q1: How will you improve the performance of a React Application?</p>
                <p className='text-xl'>Ans:</p>
                <p className='ml-8'>
                    By default, in React applications, React provide a very fast User Interface(UI). But, as an application grows, developers may face some performance issues. So, here goes some useful techniques we can use to improver our React application.
                    <ol className='list-disc ml-12'>
                        <li>
                            Memoize React Components. A memoized function is usually faster because it could fetch the result from cache if it is called with same values as previous.
                        </li>
                        <li>
                            We should keep component state local where necessary.
                        </li>
                        <li>
                            We should avoid using Index as Key for map.
                        </li>
                        <li>
                            We must not initialize state with props which can be changed later. Instead of it, we should use props directly in the component.
                        </li>
                        <li>
                            We can avoid rendering all of the images at once to improve the page load time.
                        </li>
                    </ol>
                </p>
            </article>
            <article className='mb-4'>
                <p className='text-xl'>Q2: What are the different ways to manage a state in a React application?</p>
                <p className='text-xl'>Ans:</p>
                <p className='ml-8'>
                    There are four main types of state in a React app. These are
                    <ol className='list-disc ml-12'>
                        <li>
                            Local state
                        </li>
                        <li>
                            Global state
                        </li>
                        <li>
                            Server state
                        </li>
                        <li>
                            URL state
                        </li>
                    </ol>
                    Here are the ways to manage all these state in React app. <br />
                    Local state can be managed in React components by using useState or useReducer hook.
                    <br />
                    Global state can be managed with the help of Context Api or, a third party solution.
                    <br />
                    Server state can be managed by SWR(React hooks for Data Fetching) or, React Query(Performant and powerful data synchronization for React).
                    <br />
                    URL state can be managed though custom hooks. That gives us all info about location, history, pathname. With React Router, we can get all the info using useLocation or useHistory hooks.
                </p>
            </article>
            <article className='mb-4'>
                <p className='text-xl'>
                    Q3: What are the different ways to manage a state in a React application?
                </p>
                <p className='text-xl'>Ans:</p>
                <p className='ml-8'>
                    In JavaScript, the property that is shared from one object to another is worked with a chain, this is called prototypical chain or inheritance.
                </p>
            </article>
            <article className='mb-4'>
                <p className='text-xl'>
                    Q4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </p>
                <p className='text-xl'>Ans:</p>
                <p className='ml-8'>
                    We should not set the state directly in React.
                    We should not set "products = [...]". Because, if we set products directly, we will lose control of these products variable. We can't update this after. But, if we set this though a state, we can update the products state by calling setProducts function whenever we have to.
                </p>
            </article>
            <article className='mb-4'>
                <p className='text-xl'>
                    Q5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </p>
                <p className='text-xl'>Ans:</p>
                <p className='ml-8'>
                    If we want to get the results of the products by name, the code will be :
                    <br />
                    const result = products.filter(p => p.name.includes(searchedName));
                </p>
            </article>
            <article className='mb-4'>
                <p className='text-xl'>
                    Q6: What is a unit test? Why should write unit tests?
                </p>
                <p className='text-xl'>Ans:</p>
                <p className='ml-8'>
                    Unit test is a software testing method where units are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect bugs and protect against bugs in the future.
                    Benefits of unit test :
                    <ol className="list-disc ml-8">
                        <li>Any kinds of bugs can be found easily.</li>
                        <li>Any kinds of bugs can be found easily.</li>
                    </ol>
                </p>
            </article>
        </div>
    );
};

export default Blogs;