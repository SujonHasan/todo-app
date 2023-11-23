import React, { useRef } from "react";
import { deleteTodo, markComplete, markIncomplete } from "action/index";
import storeType from "types/storeType";
import AppPropType from "./AppPropType";


import { connect } from "react-redux";
import { FaCheck, FaMinus, FaPlus, FaTrash } from "react-icons/fa";


const App: React.FC<AppPropType> = ({
    complete,
    incomplete,
    deleteTodo,
    markComplete,
    markIncomplete,
}) => {

    const input = useRef<HTMLInputElement>(null);

    const renderList = (type: "Complete" | "Incomplete") => {

        const looper = type === "Complete" ? complete : incomplete;

        return (

            <div className="">

                <h3 className="text-3xl font-serif font-bold mb-5"> {type} </h3>
                <ul className="sm:flex flex-wrap">

                    {looper.map((todo, index) => {

                        return (
                            <li
                                key={index}
                                className="flex flex-wrap overflow-auto m-2 rounded-2xl p-5 bg-gray-700 gap-5 hover:bg-gray-900 text-white"
                            >
                                <div className=""> {todo} </div>
                                <div className="flex gap-5">
                                    <i
                                        onClick={() => {
                                            type === "Complete"
                                                ? markIncomplete(todo)
                                                : markComplete(todo);
                                        }}
                                    >
                                        {
                                            type === "Complete" ? <FaMinus /> : <FaCheck />
                                        }
                                    </i>

                                    <i
                                        onClick={() => deleteTodo(todo)}
                                    >
                                        < FaTrash />
                                    </i>

                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>


        )


    }

    const addTodo = () => {

        if (input.current) {
            const val = input.current.value;
            input.current.value = "";
            console.log(val);
            if(val.length > 0 && val[0] !== " "){
                markIncomplete(val);
            }
            console.log(val.length);
            
            
        }
    }

    return (
        <div className="container mx-auto my-10 text-center items-center" >
            <div className="mb-10 item-center text-3xl rounded-2xl focus:ring-gray-500 foucs:ring-2" >
                <input className="p-2" type="text" placeholder="Todo" ref={input} />
                <button className="bg-gray-500 py-2 px-5 mx-5 rounded-2xl" onClick={() => addTodo()}  > Add</button>
            </div>

            <div className="sm:flex text-center  mx-auto gap-5">
                <div className="bg-red-300 sm:w-1/2 rounded-2xl p-1">
                    {renderList("Incomplete")}

                </div>
                <div className="bg-green-300 sm:w-1/2 rounded-2xl p-1">
                    {renderList("Complete")}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: storeType) => {
    return {
        complete: state.complete,
        incomplete: state.incomplete,
    }
}

export default connect(mapStateToProps, {
    deleteTodo,
    markComplete,
    markIncomplete
})(App);
