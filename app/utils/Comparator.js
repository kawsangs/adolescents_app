import EqualComparator from './EqualComparator';
import MatchAnyComparator from './MatchAnyComparator';
import MatchAllComparator from './MatchAllComparator';

const comparators = { 
  'in': MatchAnyComparator,
  'match_all': MatchAllComparator,
  '=': EqualComparator,
}

export default class Comparator {
  static get(operator) {
    return comparators[operator]
  }
}