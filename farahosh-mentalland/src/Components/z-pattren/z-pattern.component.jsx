
import styles from "./z_pattren.styles.module.css"

const Z_PATTERN_TYPE_CLASSES = {
    zPatternRtl: "z_pattern_rtl",
    zPatternLtr: "z_pattern_ltr",
}


const ZPattern = ({children, zPatternType, ...otherProps }) => {
const zpatrren = Z_PATTERN_TYPE_CLASSES[zPatternType];
    return (
        
        <div className={styles[zpatrren]}
        >
            {children}
        </div>
  
    )
}

export default ZPattern