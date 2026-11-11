import './SideBar.css';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';

const SideBar = props => {
    
        const content =<CSSTransition 
                        in={props.show} 
                        timeout={200} 
                        classNames="slide-in-left" 
                        mountOnEnter 
                        unmountOnExit  
                    >

        <aside className="side-bar" onClick={props.onClick}>
            {props.children}
        </aside>
        </CSSTransition>
        ;
        return ReactDOM.createPortal(content, document.getElementById('side-hook'));
    
};

export default SideBar;