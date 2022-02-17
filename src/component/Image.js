// financialdatapy
import financial_documentation from '../asset/financialdatapy/documentation.png';
import financial_example from '../asset/financialdatapy/example.png';
import financial_pypi from '../asset/financialdatapy/pypi.png';

// naverplacescraper
import naver_example from '../asset/naverplacescraper/example.png';
import naver_pypi from '../asset/naverplacescraper/pypi.png';

// musinsaranking
import actions from '../asset/musinsaranking/actions.png';
import job from '../asset/musinsaranking/job.png';
import result from '../asset/musinsaranking/result.png';

// capstone frontend
import home from '../asset/frontend/home.png';
import about from '../asset/frontend/about.png';
import plogging from '../asset/frontend/plogging.png';
import search from '../asset/frontend/search.png';
import stay from '../asset/frontend/stay.png';

// capstone backend
import stores from '../asset/backend/stores.png';
import keywords from '../asset/backend/keywords.png';

function Image(directory) {
  let imgs;
  switch (directory) {
    case 'financialdatapy':
      imgs = [financial_pypi, financial_documentation, financial_example];
      break;
    case 'naverplacescraper':
      imgs = [naver_pypi, naver_example];
      break;
    case 'musinsaranking':
      imgs = [actions, job, result];
      break;
    case 'frontend':
      imgs = [home, about, plogging, search, stay];
      break;
    case 'backend':
      imgs = [stores, keywords];
      break;
    default:
      console.log('Something went wrong.');
  }
  return imgs;
}

export default Image;
