import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toDateFormat, utcDateTimeToString } from '../../utils/dateUtils';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 270,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSubheader: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#3F51B5',
  },
  listItemText: {
    color: '#6C757E',
    textAlign: 'center',
  },
}));

const CheckpointsList = ({ checkpointList }) => {
  const classes = useStyles();

  return (
    <Grid container direction='column' alignItems='center' spacing={2}>
      {checkpointList.length === 0 && <p>Você não possui batidas ainda.</p>}
      <List className={classes.root} subheader={<li />}>
        {checkpointList.map((check, index) => (
          <li key={`section-${index}`}>
            <ul>
              <ListSubheader
                className={classes.listSubheader}
              >{`Dia: ${toDateFormat(check._id)}`}</ListSubheader>
              {check.dates.map((utcDate, utcDateIndex) => (
                <ListItem key={`item-${index}-${utcDateIndex}`}>
                  <ListItemText
                    className={classes.listItemText}
                    primary={`Hora: ${utcDateTimeToString(utcDate)}`}
                  />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Grid>
  );
};

CheckpointsList.propTypes = {
  checkpointList: PropTypes.array.isRequired,
};

export default connect()(CheckpointsList);
