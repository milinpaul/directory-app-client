import React from 'react'

import Typography from '../../Components/UI/Typography'
import withLoader from '../../Components/Loader/withLoader'
import ListingCard from './ListingCard'
import { Grid } from '@material-ui/core'

const RenderList = React.lazy(() => import('./RenderList'))

const RenderListWithLoader = withLoader(RenderList)

class HomeContainer extends React.Component {
  componentDidMount() {
    const { getUserDataRequest } = this.props
    getUserDataRequest()
  }

  render() {
    const { data, loading } = this.props
    const { PrimaryHeading } = Typography

    return (
      <>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <PrimaryHeading>List Of Users</PrimaryHeading>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ListingCard />
          </Grid>
          <Grid item xs={6} sm={3}>
            <ListingCard />
          </Grid>
          <Grid item xs={6} sm={3}>
            <ListingCard />
          </Grid>
          <Grid item xs={6} sm={3}>
            <ListingCard />
          </Grid>
          <Grid item xs={6} sm={3}>
            <ListingCard />
          </Grid>
          <Grid item xs={6} sm={3}>
            <ListingCard />
          </Grid>
        </Grid>
        {/* <RenderListWithLoader isLoading={loading} data={data} /> */}
      </>
    )
  }
}

export default HomeContainer
