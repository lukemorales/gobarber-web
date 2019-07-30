import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './AvatarInput_Styles';
import api from '@/services/api';

export default function AvatarInput({ profile }) {
  const { defaultValue, registerField } = useField('avatar');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={preview || `https://ui-avatars.com/api/?background=7159c1&color=fff&name=${profile.name}&size=128`}
          alt=""
        />

        <input type="file" id="avatar" accept="image/*" onChange={handleChange} data-file={file} ref={ref} />
      </label>
    </Container>
  );
}
