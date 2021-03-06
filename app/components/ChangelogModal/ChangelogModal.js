import React, { useState, useEffect } from 'react';
import store from '../../localStore';
import styles from './ChangelogModal.scss';
import Modal from '../Common/Modal/Modal';
import ChangelogRow from './ChangelogRow';

export default props => {
  const [unMount, setUnMount] = useState(false);

  useEffect(() => {
    store.set('showChangelogs', false);
  }, []);

  const openDiscord = () => {
    require('electron').shell.openExternal('https://discord.gg/ZxRxPqn');
  };

  return (
    <Modal
      history={props.history}
      unMount={unMount}
      title="WHAT'S NEW"
      style={{ height: '70vh', width: 540 }}
    >
      <div className={styles.container}>
        <h2 className={styles.hrTextGreen}>SOME COOL NEW STUFF</h2>
        <div className={styles.subHrList}>
          <ul>
            <ChangelogRow
              main="Added a crash handler"
              secondary=" when things go wrong xD"
            />
            <ChangelogRow
              main="Added java memory override for instances"
              secondary=" yeeee"
            />
            <ChangelogRow
              main="Added java arguments override for instances"
              secondary=" yeeee"
            />
            <ChangelogRow
              main="Added support for Minecraft Forge 1.13"
              secondary=". Don't tilt if it looks like it's frozen, it may take a while"
            />
          </ul>
        </div>
        <h2 className={styles.hrTextRed}>SOME BUGFIXES</h2>
        <div className={styles.subHrList}>
          <ul>
            <ChangelogRow
              main="Fixed continuous login reset"
              secondary=" (hopefully)"
            />
            <ChangelogRow
              main="Fixed download progress bar zindex"
              secondary=" lel"
            />
            <ChangelogRow
              main="Some improvements in the mods manager"
              secondary=", we're still working on it though"
            />
          </ul>
        </div>
        <h2 className={styles.hrTextYellow}>WE LOVE YOU</h2>
        <span className={styles.summary}>
          We love our users, that's why we have a dedicated discord server just
          to talk with all of them :)
        </span>
        <br />
        <img
          src="https://discordapp.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg"
          className={styles.discordImg}
          onClick={openDiscord}
        />
      </div>
    </Modal>
  );
};
