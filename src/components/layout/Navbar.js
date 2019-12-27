import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const NavBar = ({
  navbar: { navItems },
}) => {

  const linkDisplay = (linkData) => {
    if (linkData.subitems) {
      return (
        <li>
          <Link to={`/${linkData.link}`} className="dropdown-trigger" data-target={`dropdown${linkData.id}`}>
            {linkData.name}<i className="material-icons right">arrow_drop_down</i>
          </Link>
        </li>
      )
    } else if (linkData.divider) {
      return <li className="divider"></li>
    } else {
      return (
        <li>
          <Link to={`/${linkData.link}`}>
            {linkData.name}
          </Link>
        </li>
      )
    }
  }

  const linkDropdown = (linkData) => {
    if (linkData.subitems === undefined) {
      return;
    }
    return <ul id={`dropdown${linkData.id}`} className="dropdown-content">
      {linkData.subitems.map(n => (
        <Fragment key={n.id}>
          {linkDisplay(n)}
        </Fragment>
      ))}
    </ul>
  }

  return (
    <Fragment>
      {navItems.map(n => (
        <Fragment key={n.id}>
          {linkDropdown(n)}
        </Fragment>
      ))}

      <nav>
        <div className="nav-wrapper  indigo darken-4">
          <span className="brand-logo right">
            <i class="material-icons">cloud</i>
            <span className="hide-on-med-and-down">Logo</span>
          </span>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

          <ul className="left hide-on-med-and-down">
            {navItems.map(n => (
              <Fragment key={n.id}>
                {linkDisplay(n)}
              </Fragment>
            ))}

          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {navItems.map(n => (
          n.subitems === undefined &&
          <li key={n.id}>
            <Link to={`/table/${n.link}`}>
              {n.name}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(NavBar);
