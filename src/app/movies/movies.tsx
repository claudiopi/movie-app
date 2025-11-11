import { IgrAvatar, IgrButton, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCarousel, IgrCarouselSlide, IgrDatePicker, IgrIconButton, IgrList, IgrListItem, IgrSelect, IgrSelectItem, IgrTab, IgrTabs } from '@infragistics/igniteui-react';
import { useState } from 'react';
import { TheatresNearYouType } from '../models/MovieAppData/theatres-near-you-type';
import { useGetMovieListList, useGetNowPlayingList, useGetShowtimesList, useGetTheatresList, useGetTheatresNearYouList } from '../hooks/movie-app-data-hooks';
import styles from './movies.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Movies() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [listSelectedItem, setListSelectedItem] = useState<TheatresNearYouType | undefined>();
  const [value, setValue] = useState<string>('1');
  const [value1, setValue1] = useState<string>('1');
  const [value2, setValue2] = useState<string>('1');
  const { movieAppDataNowPlaying } = useGetNowPlayingList();
  const { movieAppDataMovieList } = useGetMovieListList();
  const { movieAppDataTheatres } = useGetTheatresList();
  const { movieAppDataShowtimes } = useGetShowtimesList();
  const { movieAppDataTheatresNearYou } = useGetTheatresNearYouList();

  return (
    <>
      <div className={classes("row-layout movies-container")}>
        <div className={classes("column-layout group")}>
          <h5 className={classes("content")}>
            <span>Movie Premieres</span>
          </h5>
          <div className={classes("row-layout group_1")}>
            <IgrCarousel vertical={false} animationType="slide" interval={3000} indicatorsOrientation="end" className={classes("carousel")}>
              <IgrCarouselSlide className={classes("row-layout carousel-slide")}>
                <div className={classes("column-layout group_2")}>
                  <h5 className={classes("h5_1")}>
                    <span>MoviePlex Metropolis</span>
                  </h5>
                  <IgrButton type="button" className={classes("button button_2")}>
                    <span>show schedule</span>
                  </IgrButton>
                </div>
              </IgrCarouselSlide>
              <IgrCarouselSlide className={classes("row-layout carousel-slide_1")}>
                <div className={classes("column-layout group_2")}>
                  <h5 className={classes("h5_1")}>
                    <span>MoviePlex Metropolis</span>
                  </h5>
                  <IgrButton type="button" className={classes("button button_3")}>
                    <span>show schedule</span>
                  </IgrButton>
                </div>
              </IgrCarouselSlide>
              <IgrCarouselSlide className={classes("row-layout carousel-slide_2")}>
                <div className={classes("column-layout group_2")}>
                  <h5 className={classes("h5_1")}>
                    <span>MoviePlex Metropolis</span>
                  </h5>
                  <IgrButton type="button" className={classes("button button_4")}>
                    <span>show schedule</span>
                  </IgrButton>
                </div>
              </IgrCarouselSlide>
              <IgrCarouselSlide className={classes("row-layout carousel-slide_3")}>
                <div className={classes("column-layout group_2")}>
                  <h5 className={classes("h5_2")}>
                    <span>MoviePlex Metropolis</span>
                  </h5>
                  <IgrButton type="button" className={classes("button button_5")}>
                    <span>show schedule</span>
                  </IgrButton>
                </div>
              </IgrCarouselSlide>
              <IgrCarouselSlide className={classes("row-layout carousel-slide_4")}>
                <div className={classes("column-layout group_2")}>
                  <h5 className={classes("h5_1")}>
                    <span>MoviePlex Metropolis</span>
                  </h5>
                  <IgrButton type="button" className={classes("button button_6")}>
                    <span>show schedule</span>
                  </IgrButton>
                </div>
              </IgrCarouselSlide>
            </IgrCarousel>
          </div>
          <IgrTabs className={classes("tabs")}>
            <IgrTab selected={true} className={classes("tab-item")}>
              <span slot="label">Now Playing</span>
              <div className={classes("row-layout tab-item-content")}>
                {movieAppDataNowPlaying?.map((item) => (
                  <IgrCard elevated={true} className={classes("card")} key={uuid()}>
                    <IgrCardMedia className={classes("media-content")}>
                      <img src={item.MoviePoster} alt="" className={classes("image")} />
                    </IgrCardMedia>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>{item.Name}</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>{item.Genre}</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <p className={classes("typography__body-1 content")}>
                        <span>{item.Description}</span>
                      </p>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")}>
                      <div style={{ display: 'contents' }} slot="start">
                        <IgrButton variant="flat" type="button" className={classes("button button_7")}>
                          <span>More</span>
                        </IgrButton>
                      </div>
                      <div slot="end">
                        <IgrIconButton variant="flat" className={classes("icon-button")}>
                          <span className={classes("material-icons icon")}>
                            <span>favorite</span>
                          </span>
                        </IgrIconButton>
                        <IgrIconButton variant="flat" className={classes("icon-button")}>
                          <span className={classes("material-icons icon")}>
                            <span>bookmark</span>
                          </span>
                        </IgrIconButton>
                        <IgrIconButton variant="flat" className={classes("icon-button")}>
                          <span className={classes("material-icons icon")}>
                            <span>share</span>
                          </span>
                        </IgrIconButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                ))}
              </div>
            </IgrTab>
            <IgrTab disabled={true} className={classes("tab-item")}>
              <span slot="label">Opening This Week</span>
              <div className={classes("row-layout tab-item-content_1")}>
                <div className={classes("row-layout demo-content")}>
                  <img src="/src/assets/start-building-dark.svg" alt="" className={classes("image_1")} />
                  <p className={classes("typography__body-2 text")}>
                    <span>Remove the "demo-content" container, and add your own content.</span>
                  </p>
                </div>
              </div>
            </IgrTab>
            <IgrTab disabled={true} className={classes("tab-item")}>
              <span slot="label">Coming Soon</span>
              <div className={classes("row-layout tab-item-content_1")}>
                <div className={classes("row-layout demo-content")}>
                  <img src="/src/assets/start-building-dark.svg" alt="" className={classes("image_1")} />
                  <p className={classes("typography__body-2 text")}>
                    <span>Remove the "demo-content" container, and add your own content.</span>
                  </p>
                </div>
              </div>
            </IgrTab>
          </IgrTabs>
        </div>
        <div className={classes("column-layout group_3")}>
          <div className={classes("column-layout buy-tickets")}>
            <p className={classes("typography__subtitle-2 title")}>
              <span>BUY TICKETS</span>
            </p>
            <IgrSelect outlined={false} label="Pick a Movie" placeholder="Select Movie Title" value={value} onChange={(e) => setValue(e.detail.value)} className={classes("select")}>
              <span slot="prefix">
                <span className={classes("material-icons icon_1")}>
                  <span>movie</span>
                </span>
              </span>
              {movieAppDataMovieList?.map((item) => (
                <IgrSelectItem value="1" key={uuid()}>
                  <span>{item.Name}</span>
                </IgrSelectItem>
              ))}
            </IgrSelect>
            <IgrSelect outlined={false} label="Theatres" placeholder="Select a Movie Complex" value={value1} onChange={(e) => setValue1(e.detail.value)} className={classes("select")}>
              <span slot="prefix">
                <span className={classes("material-icons icon_1")}>
                  <span>location_on</span>
                </span>
              </span>
              {movieAppDataTheatres?.map((item) => (
                <IgrSelectItem value="1" key={uuid()}>
                  <span>{item.Theatres}</span>
                </IgrSelectItem>
              ))}
            </IgrSelect>
            <div className={classes("group_4")}>
              <IgrDatePicker label="Date" outlined={false}></IgrDatePicker>
            </div>
            <IgrSelect outlined={false} label="Show Time" value={value2} onChange={(e) => setValue2(e.detail.value)} className={classes("select_1")}>
              <span slot="prefix">
                <span className={classes("material-icons icon_1")}>
                  <span>access_time</span>
                </span>
              </span>
              {movieAppDataShowtimes?.map((item) => (
                <IgrSelectItem value="1" key={uuid()}>
                  <span>{item.Showtimes}</span>
                </IgrSelectItem>
              ))}
            </IgrSelect>
            <IgrButton type="button" className={classes("button button_8")}>
              <span>GET TICKETS NOW</span>
            </IgrButton>
          </div>
          <div className={classes("column-layout theatres-near-you")}>
            <p className={classes("typography__subtitle-2 text_1")}>
              <span>THEATRES NEAR YOU</span>
            </p>
            <IgrList className={classes("list")}>
              {movieAppDataTheatresNearYou?.map((item) => (
                <div style={{ display: 'contents' }} onClick={() => setListSelectedItem(item)} key={uuid()}>
                  <IgrListItem selected={listSelectedItem != null && listSelectedItem === item}>
                    <div slot="start">
                      <IgrAvatar initials={item.Initials} shape="circle" className={classes("avatar")}></IgrAvatar>
                    </div>
                    <div slot="title">{item.Theatre}</div>
                    <div slot="subtitle">{item.Address}</div>
                  </IgrListItem>
                </div>
              ))}
            </IgrList>
            <IgrButton type="button" className={classes("button_1 button_1_1")}>
              <span>Change Location</span>
            </IgrButton>
          </div>
        </div>
      </div>
    </>
  );
}
