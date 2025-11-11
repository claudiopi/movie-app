import { IgrAvatar, IgrDropdown, IgrDropdownItem, IgrIconButton, IgrNavDrawer, IgrNavDrawerItem } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';
import '/src/app/base-view-styles.css';

export default function App() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);
  const dropdown = useRef<IgrDropdown>(null);

  return (
    <>
      <div className={classes("row-layout movie-app-container")}>
        <IgrNavDrawer position="relative" ref={navDrawer} className={classes("nav-drawer")}>
          <div style={{ display: 'contents' }} onClick={() => navigate(`/movies`)}>
            <IgrNavDrawerItem>
              <span slot="icon">
                <span className={classes("material-icons icon")}>
                  <span>movie</span>
                </span>
              </span>
              <div slot="content">Movies</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{ display: 'contents' }} onClick={() => navigate(`/movie-complex`)}>
            <IgrNavDrawerItem>
              <span slot="icon">
                <span className={classes("material-icons icon")}>
                  <span>location_on</span>
                </span>
              </span>
              <div slot="content">Theatres</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{ display: 'contents' }} onClick={() => navigate(`/my-purchases`)}>
            <IgrNavDrawerItem>
              <span slot="icon">
                <span className={classes("material-icons icon")}>
                  <span>shopping_cart</span>
                </span>
              </span>
              <div slot="content">My Purchases</div>
            </IgrNavDrawerItem>
          </div>
          <IgrNavDrawerItem>
            <span slot="icon">
              <span className={classes("material-icons icon")}>
                <span>local_offer</span>
              </span>
            </span>
            <div slot="content">Promos</div>
          </IgrNavDrawerItem>
          <IgrNavDrawerItem>
            <span slot="icon">
              <span className={classes("material-icons icon")}>
                <span>help</span>
              </span>
            </span>
            <div slot="content">Help &amp; Support</div>
          </IgrNavDrawerItem>
          <IgrNavDrawerItem>
            <span slot="icon">
              <span className={classes("material-icons icon")}>
                <span>chat_bubble</span>
              </span>
            </span>
            <div slot="content">Contact Us</div>
          </IgrNavDrawerItem>
        </IgrNavDrawer>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout header")}>
            <div className={classes("row-layout group_1")}>
              <div style={{ display: 'contents' }} onClick={() => navDrawer?.current?.toggle()}>
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons icon_1")}>
                    <span>menu</span>
                  </span>
                </IgrIconButton>
              </div>
              <p className={classes("typography__subtitle-1 text")}>
                <span>MOVIE APP</span>
              </p>
            </div>
            <div className={classes("row-layout group_2")}>
              <IgrIconButton variant="flat" className={classes("icon-button_1")}>
                <span className={classes("material-icons icon_1")}>
                  <span>search</span>
                </span>
              </IgrIconButton>
              <IgrIconButton variant="flat" className={classes("icon-button_1")}>
                <span className={classes("material-icons icon_1")}>
                  <span>favorite</span>
                </span>
              </IgrIconButton>
              <div style={{ display: 'contents' }} onClick={(e) => dropdown?.current?.toggle(e.currentTarget)}>
                <IgrAvatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar8.png" shape="circle" className={classes("avatar")}></IgrAvatar>
              </div>
              <IgrDropdown ref={dropdown} className={classes("dropdown")}>
                <IgrDropdownItem>
                  <span>My Profile</span>
                </IgrDropdownItem>
                <IgrDropdownItem>
                  <span>Logout</span>
                </IgrDropdownItem>
              </IgrDropdown>
            </div>
          </div>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
