import { siteConfig } from '../../site.config';
import '../brand-loading.css';

export default function Loading() {
  return <main id="main" className="shell inner"><div className="medboi-loading" role="status">
    <span className="medboi-loading-art" aria-hidden="true">
      <span className="medboi-loading-book">
        <span className="medboi-loading-page" />
      </span>
      {siteConfig.branding.loadingMark && <img src={siteConfig.branding.loadingMark} width={64} height={64} alt="" />}
    </span>
    <span>Loading · লোড হচ্ছে</span>
  </div></main>;
}
