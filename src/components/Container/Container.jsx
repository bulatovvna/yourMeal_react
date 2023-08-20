import style from  "./Container.module.css"
import classNames from "classnames";

// eslint-disable-next-line react/prop-types
export const Container = ({children, className}) => (
    <div className={classNames(style.container, className)}>{children}</div>
)