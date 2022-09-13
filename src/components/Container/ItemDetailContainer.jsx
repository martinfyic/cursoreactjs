import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataProd } from "../../utilities/getDataProd";
import { ItemDetail } from "./ItemDetail";
import styles from "./ItemDetailContainer.module.css";

export const ItemDetailContainer = (props) => {
    const [itemDetail, setItemDetail] = useState({});
    const { id } = useParams();

    // *? test area

    // *? test area

    useEffect(() => {
        setTimeout(async () => {
            const resp = await getDataProd();
            const filterOneItem = resp.filter(
                (elem) => elem.id === parseInt(id)
            );
            setItemDetail(filterOneItem);
        }, 1000);
    }, [id]);

    return (
        <>
            <h1 className={styles.TitleDetails}>{props.titleDetail}</h1>
            <ItemDetail itemDetail={itemDetail} />
        </>
    );
};
