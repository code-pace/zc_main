import React from 'react'
import styles from '../styles/SettingsTab.module.css'

const ChangeEmail = () => {
  return (
    <div className={styles.passwordsection}>
      <form class="row d-flex flex-column">
        <div class="col-md-5">
          <label for="firstname" class="form-label">
            Current Email
          </label>
          <input type="password" class="form-control" required />
        </div>
        <div class="col-md-5">
          <label for="lastname" class="form-label">
            New email address
          </label>
          <input type="text" class="form-control" required />
        </div>
        <div class="col-md-4 mb-3 mt-3">
          <button class="btn btn-primary" id="submit">
            Update email address
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChangeEmail
