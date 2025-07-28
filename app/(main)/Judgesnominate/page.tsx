"use client";
import Image from "next/image";
import Link from "next/link";
import JudgeNominationHeader from '@/components/UI/judgenominate/nominateheader'
import JudgeNominationForm from '@/components/UI/judgenominate/nominateform';

const JudgeNomination = () => {
  return (
    <>
    <JudgeNominationHeader />
    <JudgeNominationForm />
    </>
  );
};

export default JudgeNomination;