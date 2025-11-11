import { IgrButton, IgrList, IgrListItem } from 'igniteui-react';
import { useState } from 'react';
import { MyPurchasesType } from '../models/MovieAppData/my-purchases-type';
import { useGetMyPurchasesList } from '../hooks/movie-app-data-hooks';
import styles from './my-purchases.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MyPurchases() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [listSelectedItem1, setListSelectedItem1] = useState<MyPurchasesType | undefined>();
  const { movieAppDataMyPurchases } = useGetMyPurchasesList();

  return (
    <>
      <div className={classes("row-layout my-purchases-container")}>
        <div className={classes("column-layout group")}>
          <h4 className={classes("h4")}>
            <span>My Purchases</span>
          </h4>
          <IgrList className={classes("list")}>
            {movieAppDataMyPurchases?.map((item) => (
              <div style={{ display: 'contents' }} onClick={() => setListSelectedItem1(item)} key={uuid()}>
                <IgrListItem selected={listSelectedItem1 != null && listSelectedItem1 === item}>
                  <div>
                    <div className={classes("row-layout group_1")}>
                      <img src={item.MoviePoster} alt="" className={classes("image")} />
                      <div className={classes("row-layout group_2")}>
                        <div className={classes("row-layout group_3")}>
                          <div className={classes("column-layout group_4")}>
                            <h6 className={classes("h6")}>
                              <span>{item.Name}</span>
                            </h6>
                            <a target="_blank" className={classes("typography__body-2 hyperlink")}>
                              <span>{item.Theatre}</span>
                            </a>
                          </div>
                          <div className={classes("column-layout group_5")}>
                            <p className={classes("typography__body-2 text")}>
                              <span>Purchased</span>
                            </p>
                            <p className={classes("typography__body-2 text_1")}>
                              <span>{item.Purchased}</span>
                            </p>
                          </div>
                        </div>
                        <IgrButton type="button" className={classes("button")}>
                          <span className={classes("material-icons")}>
                            <span>cloud_download</span>
                          </span>
                          <span>Get Tickets</span>
                        </IgrButton>
                      </div>
                    </div>
                  </div>
                </IgrListItem>
              </div>
            ))}
          </IgrList>
        </div>
      </div>
    </>
  );
}
