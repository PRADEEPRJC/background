var iteration_count, job_list, tick_result;
job_list = new BGJobList(20);
tick_result = [];
iteration_count = 0;
job_list.append(null, (function() {
  tick_result.push('This');
  return false;
}), (function(was_completed) {
  if (was_completed) {
    return alert('Test completed');
  } else {
    return alert('Test cancelled and job list destroyed');
  }
}));
job_list.append(null, (function() {
  tick_result.push('is');
  return false;
}));
job_list.append(null, (function() {
  tick_result.push('a');
  return false;
}));
job_list.append(null, (function() {
  tick_result.push('test');
  job_list.append(null, (function() {
    tick_result.push('contrived');
    return false;
  }));
  job_list.append(null, (function() {
    tick_result.push('test');
    return false;
  }));
  job_list.append(null, (function() {
    alert(tick_result.join(' '));
    tick_result = [];
    job_list.destroy();
    return true;
  }));
  return true;
}));
job_list.append(null, (function() {
  alert(tick_result.join(' '));
  tick_result = [];
  return true;
}));